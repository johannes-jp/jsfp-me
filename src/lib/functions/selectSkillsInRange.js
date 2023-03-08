export function selectSkillsInRange(data, threshold, str) {
    let skills = data //make sure you're at the right layer
        .filter(item => item.priority[str] >= threshold[0] && item.priority[str] <= threshold[1])
        .map(item => { return { name: item.name, priority: item.priority[str] } });

    return skills;
}

