// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = (_req: any, res: any) => {
  res.status(200).json({ success: true, msg: 'show all bootcamps' });
}

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = (req: any, res: any) => {
  res.status(200).json({ success: true, msg: `get bootcamp ${req.params.id}` });
}

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createBootcamp = (_req: any, res: any) => {
  res.status(200).json({ success: true, msg: 'create new bootcamp' });
}

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = (req: any, res: any) => {
  res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}` });
}

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = (req: any, res: any) => {
  res.status(200).json({ success: true, msg: `delete bootcamp ${req.params.id}` });
}