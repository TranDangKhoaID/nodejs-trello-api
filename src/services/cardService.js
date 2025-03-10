import { cardModel } from '~/models/cardModel'

const createNew = async (reqBody) => {
  try {
    //Xu li logic du lieu
    const newCard = {
      ...reqBody
    }
    const createdCard = await cardModel.createNew(newCard)
    const getNewCard = await cardModel.findOneById(createdCard.insertedId)
    //...
    return getNewCard
  } catch (error) { throw error }
}

export const cardService = {
  createNew
}