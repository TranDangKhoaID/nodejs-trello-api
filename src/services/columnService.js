import { columnModel } from '~/models/columnModel'

const createNew = async (reqBody) => {
  try {
    //Xu li logic du lieu
    const newColumn = {
      ...reqBody
    }
    const createdColumn = await columnModel.createNew(newColumn)
    const getNewColumn = await columnModel.findOneById(createdColumn.insertedId)
    //...
    return getNewColumn
  } catch (error) { throw error }
}

export const columnService = {
  createNew
}