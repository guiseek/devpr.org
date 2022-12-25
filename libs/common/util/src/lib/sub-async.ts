import {SubLike} from './interfaces/sub-like.interface'
import {isFunction} from './utilities/is-function'
import {Nullable} from './types/nullable.type'

export class SubAsync {
  protected _subs: Nullable<SubLike>[] = []

  add(...subs: Nullable<SubLike>[]) {
    this._subs = this._subs.concat(subs)
  }

  set async(sub: Nullable<SubLike>) {
    this._subs.push(sub)
  }

  unsub() {
    const unsub = (sub: Nullable<SubLike>) => {
      return sub && isFunction(sub.unsubscribe) && sub.unsubscribe()
    }
    this._subs.forEach(unsub)
    this._subs = []
  }
}
