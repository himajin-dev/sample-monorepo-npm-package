export const baz = (name: string) => {
  console.log(`${name} from package-baz`)
}

export * from './foo'