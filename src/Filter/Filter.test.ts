



beforeEach( () => {

})

test.skip('should be return if < 89', () => {
    //action
    const ages = [3, 19, 41, 38, 90, 101, 25, 50]
    const oldAges = ages.filter(age => age < 89)

    //expect result
    expect(oldAges.length).toBe(6)
    expect(oldAges[0]).toBe(3)
    expect(oldAges[3]).toBe(38)
})

test.skip('should be take course chipper 160w', () => {
    //action
    const courses = [
        {title: 'css', price: 110},
        {title: 'js', price: 200},
        {title: 'React', price: 150}
    ]
    const cheepCourses = courses.filter(courses => courses.price < 160)
    //expect result
    expect(cheepCourses.length).toBe(2)
    expect(cheepCourses[0].price).toBe(110)
    expect(cheepCourses[1].title).toBe('React')
})

test('should be return make the task', () => {
    //action
    let tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Rest API", isDone: false },
        { id: 5, title: "GraphQL", isDone: false },
    ];
    const makeTask = tasks.filter(task => task.isDone)
    //expect result
    expect(makeTask.length).toBe(2)
    expect(makeTask[0].id).toBe(1)
    expect(makeTask[1].id).toBe(2)
})
