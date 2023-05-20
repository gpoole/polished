function guard(lowerBoundary: number, upperBoundary: number, value: number): number {
  return value < lowerBoundary ? lowerBoundary : value > upperBoundary ? upperBoundary : value
}

export default guard
