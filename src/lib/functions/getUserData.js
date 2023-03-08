function getJobData(id, data) {
    const job = data.work_experience.find(j => j.id === id);
    if (job) {
        return job;
    } else {
        return null;
    }
}

export { getJobData };