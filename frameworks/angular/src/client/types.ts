import type {
  Parameters as DefaultParameters,
  StoryContext as DefaultStoryContext,
} from '@storybook/csf';

export interface NgModuleMetadata {
  declarations?: any[];
  entryComponents?: any[];
  imports?: any[];
  schemas?: any[];
  providers?: any[];
}
export interface ICollection {
  [p: string]: any;
}

export interface IStorybookStory {
  name: string;
  render: (context: any) => any;
}

export interface IStorybookSection {
  kind: string;
  stories: IStorybookStory[];
}

export interface StoryFnAngularReturnType {
  props?: ICollection;
  moduleMetadata?: NgModuleMetadata;
  template?: string;
  styles?: string[];
  userDefinedTemplate?: boolean;
}

export type AngularFramework = {
  component: any;
  storyResult: StoryFnAngularReturnType;
};

export type Parameters = DefaultParameters & {
  /** Uses legacy angular rendering engine that use dynamic component */
  angularLegacyRendering?: boolean;
  bootstrapModuleOptions?: unknown;
};

export type StoryContext = DefaultStoryContext<AngularFramework> & { parameters: Parameters };
