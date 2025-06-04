import { BaseEntity, Field } from '@/core'
// import { BaseEntity } from '@/core/BaseEntity'

export class Menu extends BaseEntity {
  @Field({
    label: '菜单名称',
  })
  title!: string

  @Field({
    label: '菜单路径',
  })
  path!: string

  @Field({
    label: '组件地址',
  })
  componentUrl!: string

  @Field({
    label: '菜单类型',
  })
  menuType!: number

  @Field({
    label: '图标',
  })
  icon!: string

  @Field({
    label: '父ID',
  })
  pid!: string

  @Field({
    label: '子菜单',
  })
  children: Menu[] = []

  /**
   * # 面包屑
   */
  breadcrumb: string[] = []
}
