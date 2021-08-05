import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Images, ImagesPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Images",
  component: Images,
} as ComponentMeta<typeof Images>;

const Template: ComponentStory<typeof Images> = (args: ImagesPropsI) => (
  <x.div display="flex" gap="20px">
    <Images {...args} />
    <Images {...args} fill="red.500" />
    <Images {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
