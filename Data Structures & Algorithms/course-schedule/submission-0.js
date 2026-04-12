class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const map = new Map();
        const visited = new Set();

        for (let i = 0; i < prerequisites.length; i++) {
            if (!map.has(prerequisites[i][0])) {
                map.set(prerequisites[i][0], [prerequisites[i][1]]);
            } else {
                map.get(prerequisites[i][0]).push(prerequisites[i][1]);
            }
        }

        function dfs(currentCourse) {
            if (visited.has(currentCourse)) {
                return false;
            }

            if (!map.has(currentCourse) || map.get(currentCourse)?.length === 0) {
                return true;
            }

            visited.add(currentCourse);

            for (let dep of map.get(currentCourse)) {
                if (!dfs(dep)) {
                    return false;
                }
            }

            map.set(currentCourse, []);
            visited.delete(currentCourse);
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return false;
            }
        }

        return true;
    }
}
