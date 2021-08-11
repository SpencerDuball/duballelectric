import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeSend, EnvelopeSendPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeSend",
  component: EnvelopeSend,
} as ComponentMeta<typeof EnvelopeSend>;

const Template: ComponentStory<typeof EnvelopeSend> = (
  args: EnvelopeSendPropsI
) => (
  <Box display="flex" gap="20px">
    <EnvelopeSend {...args} />
    <EnvelopeSend {...args} fill="red.500" />
    <EnvelopeSend {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
