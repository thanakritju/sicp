#lang sicp
; Basic function
(define (square x) (* x x))
(define (abs x) (if (> x 0) x (- x)))

; Newton's method
(define (sqrt-iter guess x )
  (new-if (good-enough? guess x)
      guess
      (sqrt-iter (improve guess x) x)))
(define (improve guess x)
  (average guess (/ x guess)))
(define (average x y)
  (/ (+ x y) 2))
(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.0001))

; new if
(define (new-if predicate then-clause else-clause)
  (cond (predicate then-clause)
        (else else-clause)))
        
; looping forever
(sqrt-iter 1 2)