import antfu from '@antfu/eslint-config'
import prettierConflicts from 'eslint-config-prettier'

export default antfu({ stylistic: false }, prettierConflicts)
