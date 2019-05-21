#lang sicp
(define (square x) (* x x))
(define (square-sun-of-biggest-two x y z)
  (if (> x y)
      (if (> y z) (+ (square x) (square y))
          (+ (square x) (square z)))
      (if (> x z) (+ (square x) (square y))
          (+ (square y) (square z)))
      )
  )

; Test cases
(= (square-sun-of-biggest-two 1 2 3) (+ 4 9))
(= (square-sun-of-biggest-two 5 8 3) (+ 64 25))
(= (square-sun-of-biggest-two 4 2 3) (+ 16 9))