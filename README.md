# InitAsync

This project demonstrates an alternate approach to managing async functions required during component initialization. In our prior testing experience, components can be difficult to fully initialize when an async call is made in `ngOnInit` that we expect to resolve prior to tests evaluating assertions.

# Running

```bash
ng serve # localhost:4200
ng test
```

# Experimenting

While running the test suite, in `async.component.spec.ts`, comment out `expect(await component.setupReadyHook).toBeTrue()`. Notice that with the await, our tests succeed as expected. Without the await, the async block that is executed in `ngOnInit` is not fully resolved by the time the test evaluates assertions.
