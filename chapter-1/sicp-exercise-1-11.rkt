#lang sicp
; Recursive
(define (A n)
    (if (< n 4)
        n
        (+ (A (- n 1)) 
           (* 2 (A (- n 2))) 
           (* 3 (A (- n 3))))))
; Iterative
(define (B n)
  (b-iter 3 2 1 n))
(define (b-iter a3 a2 a1 count)
  (if (= count 1)
      a1
      (b-iter (+ a3 a2 a2 a1 a1 a1) a3 a2 (- count 1))))
      
; Tests
(= (A 10) (B 10))
(= (A 1) 1)
(= (B 1) 1)
(= (A 2) 2)
(= (B 2) 2)
(= (A 3) 3)
(= (B 3) 3)