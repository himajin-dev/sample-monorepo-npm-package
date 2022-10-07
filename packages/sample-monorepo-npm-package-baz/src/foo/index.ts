export const foo = (name: string) => {
  console.log(`${name} from package-baz/foo`)
}

export * from './bar'
