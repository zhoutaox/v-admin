import 'reflect-metadata'
import { getMetadataStorage } from 'class-validator'
import { classValidatorTransform } from '@/core'
import { SymbolKeys } from '@/enums'

/**
 * 参数验证装饰器
 * 用于在方法参数上添加元数据，便于后续参数校验
 * @param options 校验参数配置
 */
export function VerifyParameter(target: object, propertyKey: string, parameterIndex: number) {
  const paramTypes = Reflect.getMetadata('design:paramtypes', target, propertyKey)
  const instance = paramTypes[parameterIndex]

  const primitiveTypes = [String, Number, Boolean, Symbol, BigInt]

  const metadataStorage = getMetadataStorage()
  const validationMetaList = metadataStorage.getTargetValidationMetadatas(instance, '', true, true)
  let isPrimitiveTypes = false
  const item = Reflect.getMetadata(SymbolKeys.VERIFY_PARAMETER_KEY, target.constructor, propertyKey)
  if (primitiveTypes.includes(instance)) {
    // 原始数据类型，使用简单验证方式
    isPrimitiveTypes = true
  }

  if (item) {
    item.push({
      propertyKey,
      parameterIndex,
      instance: new instance(),
      type: isPrimitiveTypes ? 'primitive' : 'class',
      typeName: instance.name,
      rules: isPrimitiveTypes
        ? { type: 'primitive', name: instance.name }
        : classValidatorTransform(validationMetaList),
    })
  } else {
    Reflect.defineMetadata(
      SymbolKeys.VERIFY_PARAMETER_KEY,
      [
        {
          propertyKey,
          parameterIndex,
          instance: new instance(),
          type: isPrimitiveTypes ? 'primitive' : 'class',
          typeName: instance.name,
          rules: isPrimitiveTypes
            ? { type: 'primitive', name: instance.name }
            : classValidatorTransform(validationMetaList),
        },
      ],
      target.constructor,
      propertyKey,
    )
  }
  Reflect.defineMetadata(`verify:${propertyKey}:${parameterIndex}`, instance, target)
}
