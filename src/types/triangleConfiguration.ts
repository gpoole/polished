import { SideKeyword } from './sideKeyword'

export interface TriangleConfiguration {
  backgroundColor?: string
  foregroundColor: string
  height: number | string
  width: number | string
  pointingDirection: SideKeyword
}
