type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

const top: Pick<AllType, "name" | "color"> = {
  name: "mango",
  color: "blue",
};

const bottom: Pick<AllType, "position" | "weight"> = {
  position: 85,
  weight: 25,
};

function compare<T extends keyof AllType, U extends keyof AllType>(
  top: Pick<AllType, T>,
  bottom: Pick<AllType, U>
): AllType {
  return {
    name: top.name as string,
    color: top.color as string,
    position: bottom.position as number,
    weight: bottom.weight as number,
  };
}

const result = compare(top, bottom);
console.log(result);
