export const ControllerModel = (model: any) => {
  const newDoc = async (obj: object) => {
    const result = await model.create(obj);
    const save = result.save();

    return {
      save,
    };
  };

  const read = async (filer: {}) => {
    const result = await model.find(filer);
    return result;
  };

  return { newDoc, read };
};
