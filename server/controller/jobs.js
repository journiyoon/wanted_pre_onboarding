import * as jobRepository from "../models/jobs.js";

export async function getJobs(req, res, next) {
  const jobs = await jobRepository.getAll();
  res.status(200).json(jobs);
}

export async function getJobById(req, res, next) {
  const id = req.params.id;
  const job = await jobRepository.getById(id);
  if (job) {
    res.status(200).json(job);
  } else {
    res.status(404).json({ message: `Job id(${id}) is not found` });
  }
}

export async function create(req, res, next) {
  const { position, compensation, skill, text, companyId } = req.body;
  const opening = await jobRepository.create(
    position,
    compensation,
    skill,
    text,
    companyId
  );
  res.status(201).json(opening);
}

export async function update(req, res, next) {
  const id = req.params.id;
  const { position, compensation, skill, text } = req.body;
  const jobs = await jobRepository.getById(id);
  if (!jobs) {
    return res.status(404).json({ message: `Jobs not found: ${id}` });
  }
  const updated = await jobRepository.update(
    id,
    position,
    compensation,
    skill,
    text
  );
  res.status(200).json(updated);
}

export async function remove(req, res, next) {
  const id = req.params.id;
  const job = await jobRepository.getById(id);
  if (!job) {
    return res.status(404).json({ message: `Job not found: ${id}` });
  }
  await jobRepository.deleteById(id);
  res.sendStatus(204);
}
