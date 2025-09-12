import type { Schema, Struct } from '@strapi/strapi';

export interface HomeStats extends Struct.ComponentSchema {
  collectionName: 'components_home_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.stats': HomeStats;
    }
  }
}
