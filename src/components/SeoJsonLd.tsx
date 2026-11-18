import React from 'react';
import { servicesData } from '@/data/servicesData';
import { buildGlobalOrganizationGraph } from '@/lib/jsonLd';
import JsonLdScript from '@/components/JsonLdScript';

export default function SeoJsonLd() {
  const jsonLd = buildGlobalOrganizationGraph(servicesData);
  return <JsonLdScript data={jsonLd} />;
}
