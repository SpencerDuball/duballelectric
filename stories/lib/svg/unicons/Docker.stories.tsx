import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Docker, DockerPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Docker",
  component: Docker,
} as ComponentMeta<typeof Docker>;

const Template: ComponentStory<typeof Docker> = (args: DockerPropsI) => (
  <x.div display="flex" gap="20px">
    <Docker {...args} />
    <Docker {...args} fill="red.500" />
    <Docker {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
