import { getRegions } from './regions/regions';
import { getSectors } from './sectors/sectors';

export default async function getRegionsAndSectorsNames() {
  const regions = await getRegions();
  const sectors = await getSectors();

  const regionNames = regions.map((region) => region.name);
  const sectorNames = sectors.map((sector) => sector.name);

  return [regionNames, sectorNames];
}
