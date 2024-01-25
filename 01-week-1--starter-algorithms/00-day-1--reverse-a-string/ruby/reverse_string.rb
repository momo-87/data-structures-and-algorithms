def reverse_string(str)
  # type your code in here
#input: hello world
#output: dlrow olleh
#split string into array
#reverse array
#join array into string
#return string

return str.split("").reverse.join("")

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution