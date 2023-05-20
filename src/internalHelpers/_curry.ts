type Fn1<A, B> = (a: A, ...rest: any[]) => B
type Fn2<A, B, C> = (a: A, b: B, ...rest: any[]) => C
type Fn3<A, B, C, D> = (a: A, b: B, c: C, ...rest: any[]) => D

type CurriedFn2<A, B, C> = Fn1<A, Fn1<B, C>> & Fn2<A, B, C>
type CurriedFn3<A, B, C, D> = Fn1<A, CurriedFn2<B, C, D>> & Fn2<A, B, Fn1<C, D>> & Fn3<A, B, C, D>

function curry<A, B, C>(f: Fn2<A, B, C>): CurriedFn2<A, B, C>
function curry<A, B, C, D>(f: Fn3<A, B, C, D>): CurriedFn3<A, B, C, D>

function curry(f: (...args: any[]) => any): (...args: any[]) => any {
  function curried(
    f: (...args: any[]) => any,
    length: number,
    acc: any[],
  ): (...args: any[]) => any {
    return function fn(...args: any[]) {
      const combined = acc.concat(args)
      return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined)
    }
  }
  return curried(f, f.length, [])
}

export default curry
