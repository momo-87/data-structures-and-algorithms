def find_first_duplicate(arr)
  # type your code in here
  # const set = new Set()
  # arr.each do |item|
  #   if set.has(item) return item
  #   set.add(item)
  # end
  # return -1

  set = Set.new;
  
  arr.each do |item|
    return item if set.include?(item) 
    set << item
  end
  return -1

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
