export interface ErrorConfig
{
  message: string;
  type?: string // TODO: We can send type in the Errorconfig and based on the type we wiil load the classes
}
