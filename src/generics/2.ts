type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

const top = {
  name: "mango",
  color: "blue",
};

const bottom = {
  position: 85,
  weight: 25,
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const result = compare(top, bottom);
console.log(result);
