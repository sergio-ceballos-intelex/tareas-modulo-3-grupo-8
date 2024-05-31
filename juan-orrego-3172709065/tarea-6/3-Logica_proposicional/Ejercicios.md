# Resuelve los siguientes ejercicios:

1. true || true || false && true || false && true && true || false
2. true && (false || false && (true && (true || false && true))) || false && (true || false)
3. !(!true && (false || false && !!!true || (true && !false))) || false && true 

## Solución:

1. true || true || false && true || false && true && true || false

- true || true || false || false && true && true || false
- true || true || false || false && true || false
- true || true || false || false || false
- true || false || false
- true || false
- **true**
---

2. true && (false || false && (true && (true || false && true))) || false && (true || false)

- true && (false || false && (true && (true || false))) || false && (true || false)
- true && (false || false && (true && true)) || false && (true || false)
- true && (false || false && true) || false && (true || false)
- true && (false || false) || false && (true || false)
- true && false || false && (true || false)
- true && false || false && true
- false || false && true
- false || false
- **false**
---
3. !(!true && (false || false && !!!true || (true && !false))) || false && true

- !(!true && (false || false && !!!true || true)) || false && true
- !(!true && (false || false && false || true)) || false && true
- !(!true && (false || false || true)) || false && true
- !(!true && (false || true)) || false && true
- !(!true && true) || false && true
- !false || false && true
- true || false && true
- true || false
- **true**