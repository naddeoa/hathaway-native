// There is a bug that breaks typescript builds when react-native types are installed
// because it duplicates require from the node types package.
declare module 'react-native';
