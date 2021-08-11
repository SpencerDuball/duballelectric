import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MasterCard, MasterCardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MasterCard",
  component: MasterCard,
} as ComponentMeta<typeof MasterCard>;

const Template: ComponentStory<typeof MasterCard> = (
  args: MasterCardPropsI
) => (
  <Box display="flex" gap="20px">
    <MasterCard {...args} />
    <MasterCard {...args} fill="red.500" />
    <MasterCard {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
