/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'

const createNew = async (reqBody) => {
  try {
    //Xu li logic du lieu
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    //
    const createdBoard = await boardModel.createNew(newBoard)
    console.log(createdBoard)
    //
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)
    console.log(getNewBoard)
    //
    return getNewBoard
  } catch (error) { throw error }
}

export const boardService = {
  createNew
}