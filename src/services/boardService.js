/* eslint-disable no-useless-catch */

import { slugify } from '~/utils/formatters'

const createNew = async (reqBody) => {
  try {
    //Xu li logic du lieu
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    return newBoard
  } catch (error) { throw error }
}

export const boardService = {
  createNew
}