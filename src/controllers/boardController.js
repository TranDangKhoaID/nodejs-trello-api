import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  try {
    // console.log(req.body)
    // console.log(req.query)
    // console.log(req.params)
    // console.log(req.files)
    // console.log(req.coockie)
    // console.log(req.jwdDecoded)

    //Điều hướng dữ liệu sang tầng Service
    //throw new ApiError(StatusCodes.BAD_GATEWAY, 'trankhoa2610 test error')
    res.status(StatusCodes.CREATED).json({ message: 'POST from controller: API create new board' })
  } catch (error) { next(error) }
}

export const boardController = {
  createNew
}