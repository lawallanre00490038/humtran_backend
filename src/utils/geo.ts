export const calculateDistance = (loc1: { lat: number; lng: number }, loc2: { lat: number; lng: number }) => {
  const R = 6371e3; // meters
  const toRad = (x: number) => (x * Math.PI) / 180;

  const dLat = toRad(loc2.lat - loc1.lat);
  const dLng = toRad(loc2.lng - loc1.lng);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(loc1.lat)) *
      Math.cos(toRad(loc2.lat)) *
      Math.sin(dLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // in meters
};

export const findNearestAgent = (location: { lat: number; lng: number }, agents: {agentUserId: string,  id: string; location: { lat: number; lng: number } }[]) => {
  let min = Infinity;
  let nearest = null;
  for (const agent of agents) {
    const dist = calculateDistance(location, agent.location);
    if (dist < min) { 
      min = dist;
      nearest = agent;
    }
  }
  return nearest;
};
