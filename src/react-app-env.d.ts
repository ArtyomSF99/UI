declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.gif" {
  const value: any;
  export default value;
}
declare module "*.svg" {
  const value: string;
  export default value;
}
