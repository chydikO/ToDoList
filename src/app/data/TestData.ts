import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";
// @ts-ignore
import * as faker from 'faker';

export class TestData {
    static categories: Category[] = [];
    static priorities: Priority[] = [];
    static tasks: Task[] = [];

    static generateTestData(): void {
        // Заполнение массива categories
        for (let i = 1; i <= 15; i++) {
            const category = new Category(i, faker.random.word());
            this.categories.push(category);
        }

        // Заполнение массива priorities
        const priorityColors = ['red', 'green', 'blue', 'yellow'];
        for (let i = 1; i <= 4; i++) {
            const priority = new Priority(i, faker.random.word(), priorityColors[i - 1]);
            this.priorities.push(priority);
        }

        // Заполнение массива tasks
        for (let i = 1; i <= 20; i++) {
            const randomCategory = faker.random.arrayElement(this.categories);
            const randomPriority = faker.random.arrayElement(this.priorities);

            const task = new Task(
                i,
                faker.lorem.sentence(),
                faker.random.boolean(),
                randomPriority,
                randomCategory,
                faker.date.future()
            );

            this.tasks.push(task);
        }
    }
}

// Вызов метода для генерации тестовых данных
TestData.generateTestData();
