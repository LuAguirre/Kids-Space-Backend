export const getUsers = (req, res) => {
  res.send('get works')
};

export const registryUsers = (req, res) => {
  res.send('post works')
};

export const getUser = (req, res) => {
  const { id } = req.params;
  res.send('get works')
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  res.send('delete works')
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  res.send('update works')
};
