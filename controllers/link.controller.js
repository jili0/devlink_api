import Link from "../model/Link.js";

const getAllLinks = async (req, res) => {
  try {
    const links = await Link.find();
    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLink = async (req, res) => {
  try {
    const { id } = req.params;
    const link = await Link.findById(id);
    if (!link) {
      res.status(404).json({ message: "Link not found" });
    }
    res.status(200).json(link);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addLink = async (req, res) => {
  try {
    const link = await Link.create(req.body);
    res.status(200).json(link);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLink = async (req, res) => {
  try {
    const { id } = req.params;
    const link = await Link.findByIdAndUpdate(id, req.body);
    res.status(200).json(link);

    if (!link) {
      return res.status(404).json({ message: error.message });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteLink = async (req, res) => {
  try {
    const { id } = req.params;
    const link = await Link.findByIdAndDelete(id);
    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }
    res.status(200).json({ message: "Link deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllLinks, getLink, addLink, updateLink, deleteLink };
