import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'

const createNew = async (req, res, next) => {
  try {
    // console.log(req.body)
    // console.log(req.query)
    // console.log(req.params)
    // console.log(req.files)
    // console.log(req.coockie)
    // console.log(req.jwdDecoded)

    //Điều hướng dữ liệu sang tầng Service
    const createdBoard = await boardService.createNew(req.body)

    res.status(StatusCodes.CREATED).json(createdBoard)
  } catch (error) { next(error) }
}

const getDetails = async (req, res, next) => {
  try {
    const boardId = req.params.id
    const board = await boardService.getDetails(boardId)

    res.status(StatusCodes.OK).json(board)
  } catch (error) { next(error) }
}


export const boardController = {
  createNew,
  getDetails
}