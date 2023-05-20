export const tsconfig = {
  compilerOptions: {
    baseUrl: '.',
    resolveJsonModule: true,
    paths: {
      '@App/*': ['src/*'],
      'lib/*': ['common/*'],
    },
  },
}
