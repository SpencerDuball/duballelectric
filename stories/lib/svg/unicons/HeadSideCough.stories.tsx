import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { HeadSideCough, HeadSideCoughPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HeadSideCough",
  component: HeadSideCough,
} as ComponentMeta<typeof HeadSideCough>;

const Template: ComponentStory<typeof HeadSideCough> = (
  args: HeadSideCoughPropsI
) => (
  <x.div display="flex" gap="20px">
    <HeadSideCough {...args} />
    <HeadSideCough {...args} fill="red.500" />
    <HeadSideCough {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
