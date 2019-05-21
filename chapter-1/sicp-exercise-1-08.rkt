#lang sicp
; Basic function
(define (cube x) (* x x x))
(define (abs x) (if (> x 0) x (- x)))

(define (apply-until step done? x)
  (if (done? x) x
    (apply-until (step x) step done?)))

; Newton's method for cube root
(define (cube-root x)
  (define (improveguess y)
    (/ (+ (/ x y y) y y) 3))
  (define (goodenough? guess)
    (< (/ (abs (- (cube guess) x)) guess) 0.0001))
  (apply-until improveguess goodenough? 1.0))