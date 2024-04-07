import type { JsonDocs, JsonDocsProp, JsonDocsEvent } from '@stencil/core/internal';
import type { InputType, SBType } from '@storybook/types';
import { capitalizeFirstLetter } from './capitalizeFirstLetter';
import docsJson from '../../docs/docs.json';

const DOCS = docsJson as unknown as JsonDocs;

export function getArgType(type?: string): SBType {
  switch (type) {
    case 'boolean':
    case 'string': {
      return { name: type };
    }
    default: {
      return undefined as unknown as SBType;
    }
  }
}

function propertyToInputType(property: JsonDocsProp): InputType {
  const { name, docs: description, default: defaultValue, required } = property;
  const type = getArgType(property.type);
  return {
    name,
    description,
    defaultValue,
    type: {
      ...type,
      required,
    },
  };
}

function eventToInputType(ev: JsonDocsEvent): InputType {
  const { detail, event, docs: description } = ev;
  const name = `on${capitalizeFirstLetter(event)}`;
  const type = `\`(value: ${detail}) => void\``;
  return {
    name,
    description: description + type,
  };
}

export function getComponentDoc(tag: string) {
  const componentDoc = DOCS.components.find((component) => {
    return component.tag === tag;
  });

  if (!componentDoc) {
    throw new Error();
  }

  const propertyInputTypes = componentDoc.props.map(propertyToInputType);
  const eventInputTypes = componentDoc.events.map(eventToInputType);
  const inputTypes = [...propertyInputTypes, ...eventInputTypes];

  const argTypes = inputTypes.reduce<Record<string, InputType>>((record, inputType) => {
    const name = inputType.name!;
    return { ...record, [name]: inputType };
  }, {});

  return {
    argTypes,
    component: tag,
    description: componentDoc.docs,
  };
}
