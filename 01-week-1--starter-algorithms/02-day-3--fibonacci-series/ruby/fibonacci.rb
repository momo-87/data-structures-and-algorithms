def fibonacci(num)
  # type your code in here
  fibo = [0, 1]

  return 0 if num === 0
  return 1 if num === 1
  for i in 2..num do
    fibo[i] = fibo[i-2] + fibo[i-1]
  end

  return fibo[num]

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
