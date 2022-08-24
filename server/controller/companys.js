import * as companyRepository from "../models/companys.js";

export async function getJobs(req, res, next) {
  const jobs = await companyRepository.getAll();
  res.status(200).json(jobs);
}

export async function getJobById(req, res, next) {
  const id = req.params.id;
  const job = await companyRepository.getById(id);
  if (job) {
    res.status(200).json(job);
  } else {
    res.status(404).json({ message: `Job id(${id}) is not found` });
  }
}

export async function create(req, res, next) {
  const { company_name, country, area, positions, desc } = req.body;
  const opening = await companyRepository.create(
    company_name,
    country,
    area,
    positions,
    desc
  );
  res.status(201).json(opening);
}

export async function update(req, res, next) {
  const id = req.params.id;
  const text = req.body.text;
  const opening = await companyRepository.update(id, text);
  if (opening) {
    opening.text = text;
  } else {
    res.status(404).json({ message: `Opening id(${id}) is not found` });
  }
}

export async function remove(req, res, next) {
  const id = req.params.id;
  await companyRepository.deleteById(id);
  res.sendStatus(204);
}
