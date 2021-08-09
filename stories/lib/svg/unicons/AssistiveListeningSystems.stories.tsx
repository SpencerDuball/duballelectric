import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  AssistiveListeningSystems,
  AssistiveListeningSystemsPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AssistiveListeningSystems",
  component: AssistiveListeningSystems,
} as ComponentMeta<typeof AssistiveListeningSystems>;

const Template: ComponentStory<typeof AssistiveListeningSystems> = (
  args: AssistiveListeningSystemsPropsI
) => (
  <x.div display="flex" gap="20px">
    <AssistiveListeningSystems {...args} />
    <AssistiveListeningSystems {...args} fill="red.500" />
    <AssistiveListeningSystems {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
